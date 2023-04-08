import PropTypes from 'prop-types';
const ProfileData = (props) => {
  return (
    <div className="bio">
      {props.handleName(props.dataOne.name)}
      <div className="image">
        {props.children}
      </div>
      {/*Use inline style*/}
      <div className="infoPerso" style={{ width: "70%", height: "400px", padding: "40px" }}>
        <div className="text">
          <h2>Who am I ?</h2>
          <h1>I'm {props.dataOne.fullName}</h1>
          <p>{props.dataOne.bio}</p>
        </div>

        <div className="info">
          <ul>
            <li><strong>Name:</strong><br />{`${props.dataOne.name}`}</li>
            <li><strong>From:</strong><br />{`${props.dataOne.from}`}</li>
            <li><strong>Email:</strong><br />{`${props.dataOne.email}`}</li>
            <li><strong>GitHub:</strong><br />{`${props.dataOne.gitHub}`}</li>
          </ul>
        </div>
      </div>

    </div>

  )
}
/*use default props for profileComponent */

ProfileData.defaultProps = {
  dataOne: { emaiL: "@exemple.com" }
};
/*use PropsType*/
ProfileData.propTypes = {
  dataOne: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    name: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default ProfileData