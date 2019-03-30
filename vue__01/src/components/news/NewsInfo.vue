<template>
    <div class="newsinfo-container">
        <!-- <h1>新闻详情----{{this.$route.params.id}}</h1> -->

        <!-- 大标题 -->
        <h3 class="title">{{vv.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{vv.add_time | ab}}</span>
            <span>点击:{{vv.click}}次</span>
        </p>
        <hr>

        <!-- 内容区域 -->
        <div class="continer" v-html="vv.content"></div>

        <!-- 评论子组件区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    import {Toast} from 'mint-ui'

    export default{
        data(){
            return {
                id:this.$route.params.id,  //将传递过来的id值挂载到data上，方便以后调用
                vv:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/getnew/'+this.id).then(result=>{
                    if(result.body.status === 0){
                        console.log(this);
                        
                        this.vv = result.body.message[0]
                    }else {
                        Toast('数据传输失败')
                    }
                })
            }
        },
        components:{ //用来注册子组件的
            'comment-box':comment
        }
    }
</script>

<style lang="scss" >
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            color: red;
            margin:15px 0;
        }
        .subtitle{
           color: #226aff;
           font-size: 13px;
           display: flex;
           justify-content: space-between;//两边对齐
        }
        .continer{
            
        }
    }
</style>
