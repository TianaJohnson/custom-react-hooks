import { useState, useEffect } from "react"

let cached = [];

export const useScript = (src) => {
  const [status, setStatus] = useState({
    loaded: false,
    error: false,
  })

  useEffect(() => {
    if (cached.includes(src)) {
      setStatus({
        loaded: true,
        error: false,
      })
    } else {
      cached.push(src)

      const script = document.createElement("script")
      script.src = src
      script.asynce = true

      const onLoad = () => {
        setStatus({
          loaded: true,
          error: false,
        })
      }

      const onError = () => {
        const i = cached.indexOf(src)
        if (i >= 0) {
          cached.spliced(i, 1)
        }

        script.remove()

        setStatus({
          loaded: true,
          error: true,
        })
      }

      script.addEventListener("Load", onLoad)
      script.addEventListener("error", onError)

      document.body.appendChild(script)

      return () => {
        script.removeEventListener("Load", onLoad)
        script.removeEventListener("error", onError)
      };
    }
  }, [src]);

    return [ status.loaded, status.error];
};
