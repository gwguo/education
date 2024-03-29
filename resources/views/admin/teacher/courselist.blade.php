@extends('admin/layouts/admin')
@section('title','课程列表')
@section('content')
    <link rel="stylesheet" href="{{asset('css/page.css')}}">
    <table class="layui-table">
        <colgroup>
            <col width="150">
            <col width="200">
            <col>
        </colgroup>

        @if($course != null)
            <thead>
            <tr>
                <th>编号</th>
                <th>课程名称</th>
                <th>课程所属分类</th>
                <th>课程价格</th>
                <th>课程状态</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach($course as $k => $v)
                <tr c_id={{$v['c_id']}}>
                    <td>{{$v['c_id']}}</td>
                    <td>{{$v['c_name']}}</td>
                    <td>{{$v['course_name']}}</td>
                    <td>{{$v['c_price']}}</td>
                    <td>
                        @if($v['audit']==1)
                            审核中
                        @elseif($v['audit']==2)
                            授课中
                        @else
                            审核失败
                        @endif
                    </td>
                    <td>
                        @if($v['audit']==1)
                            <button class="layui-btn layui-btn-xs ok">审核通过</button>
                            <button class="layui-btn layui-btn-xs no">审核不通过</button>
                        @endif
                            <button class="layui-btn layui-btn-xs del">删除</button>
                    </td>
                </tr>
            @endforeach
            </tbody>
        @else
            <h1 style="color: #0f9d58"><b>暂无课程上线</b></h1>
        @endif

    </table>
    <script>
        layui.use('layer',function(){
            //审核通过
            $('.ok').click(function() {
                var c_id = $(this).parents('tr').attr('c_id');

                $.post(
                    "/admin/coursecheckok",
                    {c_id:c_id},
                    function(msg){
                        layer.msg(msg.msg,{icon:msg.code,time:1000},function(){
                            if (msg.code == 6) {
                                history.go(0);
                            }
                        });
                    },
                    'json'
                );
            });

            //审核不通过
            $('.no').click(function(){
                var c_id = $(this).parents('tr').attr('c_id');
                location.href="/admin/coursecheckno?c_id="+c_id;
            });

            //锁定
            $('.del').click(function () {
                var c_id = $(this).parents('tr').attr('c_id');
                $.post(
                    "/admin/coursecheckdel",
                    {c_id:c_id},
                    function(msg){
                        layer.msg(msg.msg,{icon:msg.code,time:1000},function(){
                            if (msg.code == 6) {
                                history.go(0);
                            }
                        });
                    },
                    'json'
                );
            })


        });
    </script>
@endsection