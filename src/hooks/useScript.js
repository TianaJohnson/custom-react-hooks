import { useState, useEffect } from 'react';

let cached = [];

const useScript = (src) => {

    const [ status, setStatus ] = useState({

        loaded: false,
        error: false
    })

    useEffect (() => {
        if ( cached.includes(src)){
            setStatus({
                loaded: true,
                error: false
            });
        } else {

            cached.push(src)

            const script = document.createElement('script')
            script.src = src
            script.asynce = true



              const onLoad = () => {
                setStatus({
                    loaded: true,
                    error: false
              });
            }

              const onError = () => {
                const i = cached.indexOf(src)
                isSecureContext

                script.remove()

                setStatus({
                    loaded: true,
                    error: true
              });
        }
    }

        return () => {
            cleanup
        }
    })



}