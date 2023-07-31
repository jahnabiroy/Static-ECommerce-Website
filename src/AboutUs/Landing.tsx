import creator from "./aboutassets/creatorpic.jpeg"
export default function About () {
    return (
        <div style={{backgroundColor:'#033a3d'}}>
        <div className="container-fluid text-center" style={{backgroundColor: "#0a7e84"}}>
            <h1 className="pt-2 text-white" style={{fontFamily: "'Times New Roman', Times, serif",textShadow:'1px #fff'}}>FROM THE CREATOR</h1>
            <div className="m-3 p-3 col-sm-5 mx-auto" style={{backgroundColor:'whitesmoke', boxShadow : '0px 0px 6px'}}>
                <img src={creator} className="d-block w-100 mx-auto"/>
            </div>
            <div className="m-3 p-3 col-sm-10 text-black mx-auto" style={{backgroundColor: 'rgb(207, 249, 249)', boxShadow: '10px 10px #50e2ea'}}>
                <p style={{fontFamily: "'Courier New', Courier, monospace"}}>"The idea for this website came as a strike of inspiration in the middle of the day, right under the hot sun—ah, no, okay it was in the dreary monsoon of my hometown, Bombay, where it struck me, that I should definitely be the torchbearer of such an idea (even though, I was very aware of the fact, I am not the first person to come up with it). <br/><br/>
                To be very honest, I am certainly not satisfied with the layout entirely (because completeness requires Javascript and ReactJs, both of which I am struggling to master) but as a start, I am pretty confident to do greater things." <br/><br/>
                ps: I sing too :)!</p>
            </div>
        </div>
        <div className="container-fluid p-4 text-center" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            <h2 className="text-white">VISION</h2>
            <div className="col-sm-8 mx-auto m-3 p-3" style={{backgroundColor: 'aliceblue', boxShadow: '10px 10px #0a7e84'}}>
                <p>This website was supposed to be like any other e-commerce website. But as a student, I felt the need for a platform where I could not only buy and sell books, but also rent it. So, my reference or hobby is fulfilled and I do not need to stuff my bookshelf too. <br/>
                Moreover, older edition of books, in some cases, had more important information which often gets ignored as the editions release over the years. For this, the option of selling or renting out any book also exists and can be a blessing for another in need.<br/>
                If in the mood for a particular book not available in your region, the paid online format can be uploaded by users and same will be made available to all.<br/>
                With this vision in mind, Ec was born and has reached out to you. <br/>
                I sincerely hope this benefits you and is of little, if not a lot, help for you!<br/><br/>
                — Creator, Jahnabi Roy</p>
            </div>
        </div>
        </div>
    );
}