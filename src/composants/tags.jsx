import '../style/tags.scss';

const Tags = ({tags}) => {

    return (
        <ul>
          {tags.map((tag) => (
            <p className='tag' key={tag}>{tag}</p>
          ))}
        </ul>
      );
    };
  
  export default Tags;