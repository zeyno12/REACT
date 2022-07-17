import React from "react";
import "./card.css"

const Cardsss=[
    {
        id:1,
        image:"https://i.pinimg.com/474x/e7/ea/f2/e7eaf2b7204b74a41aed9e2910cd3d11.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:2,
        image:"https://i.pinimg.com/474x/2c/da/35/2cda354e0c6cea8e55186254cab44f9d.jpg",
        name:"hello babies",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:3,
        image:"https://i.pinimg.com/474x/d9/80/01/d980016fb022b56e6ec5d5dc567a3987.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:4,
        image:"https://i.pinimg.com/474x/a3/8a/9c/a38a9c24ae7f0eef5d816ee68cd374cb.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:5,
        image:"https://i.pinimg.com/474x/7b/eb/29/7beb291885890394bc07f76c9787065a.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:6,
        image:"https://i.pinimg.com/474x/ec/68/50/ec6850f56d4cafa2c2a32dd01b40e0b4.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:7,
        image:"https://i.pinimg.com/564x/7e/76/ae/7e76ae36eb2f81d568e3b9df0794cb81.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:8,
        image:"https://i.pinimg.com/474x/bb/12/4c/bb124c4062eec6517857aa9847f5f5bb.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:9,
        image:"https://i.pinimg.com/474x/68/d8/d3/68d8d3fe68ab65daa0b4866330ff2245.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:10,
        image:"https://i.pinimg.com/474x/68/9f/a9/689fa9c74ab42ea37591bc865d3fa976.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:11,
        image:"https://i.pinimg.com/474x/70/76/1c/70761c41662dbf5ae0bdfa68bffa40ef.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:12,
        image:"https://i.pinimg.com/474x/3a/ab/e2/3aabe27eb003b6f828efe783c0b4ddd4.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:13,
        image:"https://i.pinimg.com/474x/7c/9f/af/7c9faffb57c45e9ac246f57489feaab9.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:14,
        image:"https://i.pinimg.com/474x/43/1d/44/431d442005fecb38f5eca5b4f216df71.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:15,
        image:"https://i.pinimg.com/474x/25/ba/b7/25bab7a10feb31a225a5c9241a86c1d8.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:16,
        image:"https://i.pinimg.com/474x/ee/d6/7d/eed67d1d65828d69816ede6950079ef8.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:17,
        image:"https://i.pinimg.com/474x/e7/ea/f2/e7eaf2b7204b74a41aed9e2910cd3d11.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:18,
        image:"https://i.pinimg.com/474x/e7/ea/f2/e7eaf2b7204b74a41aed9e2910cd3d11.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:19,
        image:"https://i.pinimg.com/474x/e7/ea/f2/e7eaf2b7204b74a41aed9e2910cd3d11.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
    {
        id:20,
        image:"https://i.pinimg.com/474x/e7/ea/f2/e7eaf2b7204b74a41aed9e2910cd3d11.jpg",
        name:"Flamingo",
        dsc:"Pretty Animal",
        instaURL:"https://farfor-city.ru/wp-content/uploads/2022/03/76-761038_facebook-icon-instagram.jpg",
        snapchatURL:"https://pngimg.com/uploads/snapchat/snapchat_PNG15.png",
        pinteresURL:"https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_5e5e1b94cbeb42724acf8e0c_5e5e1bf4cbeb42724acf8e17/scale_1200"
    },
]
const Card =()=>{
    return(
      <div id="Cards">
        <div className="container">
            <div className="row">
               {
               Cardsss.length>0 ?(
                Cardsss.slice(0,15).map((zeynab)=>(
                    <div className="col-lg-3 mt-4">
                        <div className="cards">
                            <div className="cardimg">
                            <img src={zeynab.image} alt={zeynab.name} />
                            </div>
                            <div className="cardtext">
                                <h5>{zeynab.name}</h5>
                                <p> {zeynab.dsc}</p>
                            </div>
                            <div className="cardsocial">
                                <img src={zeynab.instaURL} alt={zeynab.name} />
                                <img src={zeynab.snapchatURL} alt={zeynab.name} />
                                <img src={zeynab.pinteresURL} alt={zeynab.name} />
                            </div>
    
                        </div>
                    </div>
                    ))
               ) : (

                <img src="https://pear-advert.ru/images/uploads/blog/273/39624707_60x60.gif" alt="" />
               )
               }
            </div>
        </div>

      </div>  
    )
}
export default Card;
