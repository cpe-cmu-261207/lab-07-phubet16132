import Link from "next/link";

const contact = () => {

    return (
      <>
      <div>
            <div className="MainPageTemplate">
            <Link href={`../portfolio`}>
                <h1 className="MainPageLink">PORTFOLIO</h1>
            </Link>
            <Link href={`../GPAcalculator`}> 
                <h1 className="MainPageLink">GPA CALCULATOR</h1>
            </Link>
            <Link href={`../post`}>
                <h1 className="MainPageLink">DUMMY API</h1>
            </Link>
            </div>
        </div>

        <div className="header">
          <h1 className="header-txt">CONTACT</h1>
        </div>
        <div className="contact">
            <div className="contact-form">
                <div className="inputgrid">
                    <aside>
                        <label>NAME : </label>
                    </aside>
                    <aside>
                        <input placeholder="name here"></input><br/>
                    </aside>
                    
                </div>
                <div className="inputgrid">
                    <aside><label>TEL : </label></aside>
                    <aside><input placeholder="telephone number here"></input><br/></aside>
                </div>
                <div className="inputgrid">
                    <aside><label>E-MAIL : </label></aside>
                    <aside><input placeholder="E-Mail here"></input><br/></aside>
                </div>
                <label>MESSAGE : </label><br/>
                <textarea placeholder="message here"></textarea>
            </div>
        </div>
        <div className="page-link-template">
              <Link href={`/portfolio`}><p className="R">PROFILE</p></Link>
              <Link href={`/portfolio/gallery`}><p className="G">GALLERY</p></Link>
              <Link href={`/portfolio/contact`}><p className="C">CONTACT</p></Link>
        </div>
      </>
    );
};

export default contact;
