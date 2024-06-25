<template>
    <body>
    <img class="logo" src="../assets/restrologo.png"/>
    <h1 class="login">Login</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="enter email"/>
        <input type="password" v-model="password" placeholder="enter password"/>
        <button v-on:click="login">Login</button>
        <p class="login" style="margin-top: 10px;">
            <router-link to="/sign">Sign Up</router-link>
        </p>
    </div>
    </body>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data()
    {
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'home'})
            }
            console.log(result)
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'home'})   
        }
    }
};
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    background-image: url(/src/assets/loginimg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 605px;
}
.login{
    color: white;
    text-align: center;
    margin-bottom: 30px;
}
.logo{
    width: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding-top: 30px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: rgb(13, 177, 241);
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>