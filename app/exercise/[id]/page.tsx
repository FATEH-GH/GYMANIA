const exercise = ({ params }: { params: { id: number } }) => {
  return <div className="bg-red-500">helllooooo{params.id}</div>;
};

export default exercise;
