<template>
  <div>
    <!-- <h3>新闻列表页面</h3> -->

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in bb" :key="item.id" >
        <router-link :to="'/home/NewsInfo/'+item.id">
          <!-- <img class="mui-media-object mui-pull-left" src="https://tse1-mm.cn.bing.net/th?id=OIP.WR2dUv3Z3NgqByIlG5b__wHaFD&w=300&h=204&c=7&o=5&dpr=1.375&pid=1.7"> -->
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发表时间:{{item.add_time |ab}}</span>
                <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://tse3-mm.cn.bing.net/th?id=OIP.1wI7pdtCzdDNw18Ia7rfgQHaF3&w=240&h=191&c=7&o=5&dpr=1.375&pid=1.7">
          <div class="mui-media-body">
            <h1>快乐</h1>
            <p class="mui-ellipsis">
                <span>发表时间:2012-12-12 12:12:12</span>
                <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li> -->
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://tse1-mm.cn.bing.net/th?id=OET.7918d920c47845fd88410eb4317c7613&w=272&h=135&c=7&rs=1&o=5&pid=1.9">
          <div class="mui-media-body">
            <h1>温暖</h1>
            <p class="mui-ellipsis">
                <span>发表时间:2012-12-12 12:12:12</span>
                <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default{
        data(){
            return {
                bb:[]//新闻列表的数据
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                this.$http.get('api/getnewslist').then(result=>{
                    console.log(result);
                    
                    if(result.body.status === 0){
                        //  获取数据成功,将数据保存到data上
                        console.log(this);
                        
                        this.bb= result.body.message
                        // console.log(bb);
                        
                    } else{
                        // 获取列表失败
                        Toast('获取新闻列表失败！')
                    }
                })
            }
        }
    }


</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                color: skyblue;
            }
        }
    }


</style>
