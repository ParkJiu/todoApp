import Avatar from './Avatar';

export default function Profile({name, job, image, isNew}) {
  return (
  <div>
    <button onClick={(e) => {
      console.log(e);
      alert('버튼이 클릭 됨');
    }}>버튼</button>
    <div className='profile'>
      <Avatar image={image} isNew={isNew}></Avatar>
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  </div>
  );
}

