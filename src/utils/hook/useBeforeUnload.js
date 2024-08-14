import { useEffect, useCallback } from 'react'

export function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args)
  }
}

export function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args)
  }
}

const useBeforeUnload = (enabled = true, message) => {
  const handler = useCallback(
    event => {
      const finalEnabled = typeof enabled === 'function' ? enabled() : true

      if (!finalEnabled) {
        return
      }

      event.preventDefault()

      if (message) {
        event.returnValue = message
      }

      return message
    },
    [enabled, message],
  )

  useEffect(() => {
    if (!enabled) {
      return
    }

    on(window, 'beforeunload', handler)

    return () => off(window, 'beforeunload', handler)
  }, [enabled, handler])
}

export default useBeforeUnload
