import './App.css';
import ProfileData from './profile/profileComponent';

function App() {
  const data = {
    fullName: 'Fatima Zahra Boudrar',
    name: 'BOUDRAR Fatima Zahra',
    from: 'Morocco , Casablanca',
    email: 'boudrarfatimazahra10@gmail.com',
    gitHub: 'https://github.com/boudrarfatimazahra',
    bio: ' I am a highly skilled and motivated Full Stack Developer with experience building e-commerce platforms. I completed a bootcamp program at Gomycode where I honed my skills in front-end and back-end web development, with a focus on React JS. I am passionate about creating innovative and efficient solutions for clients and have a proven track record of delivering high-quality products.',
    profession: ': As a Full Stack Developer, I am proficient in JavaScript, React JS, Node JS, and various other web technologies. I have experience developing e-commerce platforms, including online stores and marketplaces, and have extensive knowledge of payment gateways, shopping carts, and other e-commerce features. I am also experienced in database design, server management, and API development. I am committed to staying up-to-date with the latest technologies and trends to deliver the best solutions to my clients.',
  }
  const handleName = (name) => {
    alert(`Hello, I'm ${name} welcome to my Profile`)
  }

  return (
    <div className="App">

      <ProfileData dataOne={data} handleName={handleName} >
        <img src='imagePesona.png' alt='avatar' />
      </ProfileData>
    </div>
  )
}

export default App;
