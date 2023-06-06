import { popupSlice } from 'cs/store/popupSlice'
import { AppState } from 'cs/store/store'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled } from 'styled-components'

const PopupWrapper = styled.div`
  background: #bf4f74;
  color: white;
  height: 100px;
  width: 200px;
  top: 20px;
  right: 20px;
  border-radius: 10px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`

export const Popup = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: AppState) => state.popup.isOpen)
  const popupRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    const handler = function (event: MouseEvent) {
      event.preventDefault()

      const shouldSkip =
        event.target instanceof HTMLElement &&
        popupRef.current?.contains(event.target)

      if (!shouldSkip) {
        dispatch(popupSlice.actions.close())
      }
    }

    document.addEventListener('click', handler)

    return () => document.removeEventListener('click', handler)
  }, [isOpen, dispatch])

  if (!isOpen) {
    return null
  }

  return (
    <PopupWrapper ref={popupRef}>
      {process.env.PROD ? 'Production' : 'Developer'} Env
    </PopupWrapper>
  )
}
