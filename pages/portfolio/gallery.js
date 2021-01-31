import Link from "next/link";

const gallery = () => {

    return (
      <>
        <div>
            <div className="MainPageTemplate">
            <Link href={'../portfolio'}>
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
          <h1 className="header-txt">GALLERY</h1>
        </div>
        <div className="gallery">
            <div>
                <img src="../picture/pic2.jpg"/>
                <h1>Phu</h1>
                
            </div>
            <div>
                <img src="../picture/pic3.jpg"/>
                <h1>PibJhu</h1>
                
            </div>
            <div>
                <img src="../picture/pic4.jpg"/>
                <h1>Phu</h1>
                
            </div>
            <div>
                <img src="../picture/pic5.jpg"/>
                <h1>PibJhu</h1>
                
            </div>
            <div>
                <img src="../picture/pic6.jpg"/>
                <h1>Phu</h1>
                
            </div>
            <div>
                <img src="../picture/pic7.jpg"/>
                <h1>PibJhu</h1>
                
            </div>
            <div>
                <img src="../picture/pic8.jpg"/>
                <h1>Tree</h1>
                
            </div>
            <div>
                <img src="../picture/pic9.jpg"/>
                <h1>Light</h1>
                
            </div>
            <div>
                <img src="../picture/pic10.jpg"/>
                <h1>Road</h1>

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

export default gallery;
