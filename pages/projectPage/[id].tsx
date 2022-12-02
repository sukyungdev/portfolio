import { useRouter } from 'next/router';

// interface DataType {
//   id: number | null;
//   title: string;
//   text: string;
// }

const Post = () => {
  // const [data, setData] = useState<DataType>({ id: null, title: '', text: '' });
  const router = useRouter();
  const { id }: any = router.query;

  const API_URL = `/api/comments/${id}`;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     console.log('this is api', res.data);
  //     setData(res.data);
  //   });
  // }

  // useEffect(() => {
  //   if (id) {
  //     getData();
  //   }
  // }, [id]);

  // console.log('setData', data);

  return (
    <div>
      {/* <h1>{data && data.title}</h1>
      <p>{data && data.id}</p>
      <p>{data && data.text}</p> */}
    </div>
  );
};

export default Post;
