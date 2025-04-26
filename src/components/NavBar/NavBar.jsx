import Logo from '../../assets/img/logo.png';
const NavBar = () => {
  return(
    <div className='NavBar'>
      <nav>
        <div className="Logo">
          <a href="#">
            <img src={Logo} alt="Ncascd" />
          </a>
        </div>
        <div className="Menu">
          <div className='HomePath'>Home</div>
          <div className='AboutPath'>About</div>
          <div className='WhoComingPath'>Who's Coming</div>
          <div className='SubWhoComing'>
            <div className='AdvisoryBoard'>Advisory Board</div>
            <div className='OrganizingCommittee'>Organizing Committee</div>
            <div className='TechnicalCommittee'>Technical Committee</div>
            <div className='SpeakersPath'>Speakers</div>
          </div>
          <div className='GetInTouchPath'>Get in Touch</div>
        </div>
        <div className="Button">
          <button class="bg-transparent hover:bg-light text-light transition-all font-semibold hover:text-dark py-2 px-4 border border-slate-50 hover:border-transparent rounded">
            Submit Paper
          </button>
        </div>
        
      </nav>
    </div>
  );
}
export default NavBar;