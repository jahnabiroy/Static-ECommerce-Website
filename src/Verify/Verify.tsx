export default function Verify() {
    return (
        <div className='container-fluid' style={{backgroundColor:'#033a3d'}}> 
            <div className="p-3 text-center text-white" style={{backgroundColor:'#033a3d', fontFamily:'larger'}}>
                <h2 style={{textShadow:'0px 0px 2px #fff'}}>VERIFY</h2>
            </div>
            <div className='col-sm-4 mx-auto'>
                <form id='loginform'>
                    <input type='emailid' className="mt-1 mb-4 form-control" placeholder="E-mail Address" aria-label="emailid" aria-describedby="btnGroupAddon"/>
                    <input type='password' className="mt-1 form-control" placeholder="Password" aria-label="password" aria-describedby="btnGroupAddon"/>
                    <button type='submit'className='mt-4 mb-4 btn btn-warning'>VERIFY</button>
                </form>
                <div className="p-2 text-warning text-center" style={{fontFamily:'larger'}}>Check your registered e-mail for the verification code.</div>
                <input type='password' className="p-2 form-control" placeholder="Enter Code" aria-label="password"></input>
                <button type='submit'className='mt-2 mb-4 btn btn-warning'>ENTER</button>
            </div>
        </div>
    );
}
