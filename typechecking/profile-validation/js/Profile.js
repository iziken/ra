'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  img: PropTypes.string,
  url: (props, propName, componentName) => {
    const value = props[propName];

    if (!(/https\:\/\/vk\.com\/id[0-9]+|[A-Za-z0-9_-]+/).test(value)) {
      throw new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/id13' or 'https://vk.com/nickname'. Validation failed.`);
    }
  },
  birthday: (props, propName, componentName) => {
    const birthday = props[propName];
    const isBirthday = (typeof birthday === 'string') &&  /^\d{4}\-\d{2}\-\d{2}$/.test(birthday);
    const chekBirthday = new Date(birthday) > new Date();


    if(!isBirthday) {
      throw new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
    };
    if (chekBirthday) {
      return new Error(`Дата рождения еще не наступила`);
    }
    return null;
  },
}

Profile.defaultProps = {
  img: 'https://github.com/netology-code/ra-homeworks/blob/master/typechecking/profile-validation/images/profile.jpg?raw=true',
}
