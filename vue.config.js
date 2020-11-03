module.exports = {
    devServer:{
        proxy:{
            '/ajax':{//接口中以这个开头的跨域拦截下来，交到下面的服务器中去
                target:'https://m.maoyan.com',
                changeOrigin:true
            }
        },
        /*  如果请求多个数据  这样写   指向不同的域名
        proxy:{
            '/ajax':{//接口中以这个开头的跨域拦截下来，交到下面的服务器中去
                target:'https://m.maoyan.com',
                changeOrigin:true
            },
        }*/
    }
}