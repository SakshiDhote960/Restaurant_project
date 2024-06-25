<template>
    <body>
    <Header />
    <h1 class="hello">Hello {{name}}, Welcome on <span style="color: brown;">TastyBites</span></h1>
    <table class="center">
        <tr>
            <td><b>Id</b></td>
            <td><b>Name</b></td>
            <td><b>Contact</b></td>
            <td><b>Address</b></td>
            <td><b>Actions</b></td>
        </tr>
        <tr v-for="(item,index) in restaurant" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>
            <button class="btnupdate">
                <router-link :to="'/update/'+item.id">Update</router-link>
            </button>
                <button class="btndel" v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
    </body>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default{
    name:"Home",
    data(){
        return {
            name:'',
            restaurant:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteRestaurant(id)
        {
            let result =await axios.delete("http://localhost:3000/restaurant/"+id);
        console.log(result);
        if(result.status==200)
        {
            this.loadData()
        }
        },
        async loadData()
    {
        let user= localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'signup'})   
        }
        let result =await axios.get("http://localhost:3000/restaurant");
        console.log(result);
        this.restaurant=result.data;
    }
    },
    
    async mounted()
    {
        this.loadData();
    }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    background-image: url(/src/assets/img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 605px;
}
.hello{
    text-align: center;
    margin-top: 30px;
}
table, tr, td {
  border: 1px solid black;
}
td{
    width: 160px;
    height: 40px;
    text-align: center;
}
.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.btnupdate{
    /* border: 1px solid skyblue; */
    border-radius: 2px solid skyblue;
    color: #0a0a0a;
    background-color: rgb(224, 221, 221);
    cursor: pointer;
    /* padding: 5px; */
    margin:6px;
}
.btndel{
    /* border: 1px solid skyblue; */
    color: blue;
    background-color: rgb(224, 221, 221);
    cursor: pointer;
}
</style>