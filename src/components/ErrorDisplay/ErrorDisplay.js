export default function ErrorDisplay ({ error }) {

    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    )
  }