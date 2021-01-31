import Link from "next/link";

const Portfolio = () => {

    return (
      <>
        <div>
            <div className="MainPageTemplate">
            <Link href={`./portfolio`}>
                <h1 className="MainPageLink">PORTFOLIO</h1>
            </Link>
            <Link href={`./GPAcalculator`}> 
                <h1 className="MainPageLink">GPA CALCULATOR</h1>
            </Link>
            <Link href={`./post`}>
                <h1 className="MainPageLink">DUMMY API</h1>
            </Link>
            </div>
        </div>
        <div className="header">
          <h1 className="header-txt">PORTFOLIO</h1>
        </div>
        <div className="profile-picture-zone">
            <div className="pic_template">
                <img src="picture/pic1.jpeg" className="profile_pic"/>
            </div>
            <div>
                <p>NAME : Phubet Rujirekanusorn</p>
                <p>AGE : 19-year-old</p>
                <p>E-MAIL : phubet_ruji@cmu.ac.th</p>
                <p>TEL : 0886161454</p>
                <p>Facebook : phu ruji</p>
                <p>IG : phu_ruji</p>
            </div>
        </div>
        <div className="line">_________________________________________________________________________________</div>
        <div className="profile-zone">
            <aside>
                <div>
                    <h1 className="profile-topic">EDUCATION</h1>
                    <p>Montfort College Primary School</p>
                    <p>Montfort College Secondary School</p>
                </div>
            </aside>
            <aside>
                <div>
                    <h1 className="profile-topic">HOBBY</h1>
                    <p>Play games</p>
                    <p>Tarvel</p>
                </div>
            </aside>
            <aside>
                <div>
                    <h1 className="profile-topic">SKILLS</h1>
                    <p>Play Guitar</p>
                    <p>Badminton</p>
                </div>
            </aside>
        </div>
        <div className="page-link-template">
                <Link href={`/portfolio`}><p className="R">PROFILE</p></Link>
                <Link href={`/portfolio/gallery`}><p className="G">GALLERY</p></Link>
                <Link href={`/portfolio/contact`}><p className="C">CONTACT</p></Link>
        </div>
        
      </>
    );
};

export default Portfolio;
