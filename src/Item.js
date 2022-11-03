export default function Item({ d }) {
  return (
    <div className="grid__item">
      <h1>{d.id}</h1>
      <h2>{d.title}</h2>
      <p>{d.body}</p>
    </div>
  );
}
