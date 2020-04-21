import React, { useState } from "react";

const ButtonLoader: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
      setLoading(true)
  }

  setTimeout(() => {
      setLoading(false)
  }, 3000)

  return (
    <div>
    <button type="submit" className="buttonn" onClick={fetchData} disabled={loading}>
      {loading && <span>Sing In</span>}
      {!loading && <span>Sing In</span>}
      {loading && (
        <i
          className="fa fa-circle-o-notch fa-spin"
          style={{ marginLeft: "8px", position: "fixed", marginTop: "2px"}}
        />
      )}
    </button>
  </div>
  )
}

export default ButtonLoader;