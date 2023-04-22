import { ReactNode, useRef } from "react"
import { GestureResponderEvent, Pressable, StatusBar } from "react-native"

type Props = {
  onClose: (show: boolean) => void
  children: ReactNode
}

export function Modal ({ onClose, children }: Props) {
  const modalRef = useRef()

  const handleClose = (event: GestureResponderEvent) => {
    if (event.target == modalRef.current) onClose(false)
  }

  return (
    <Pressable
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        top: 0,
        bottom: 0,
        zIndex: 1000,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 24 + StatusBar.currentHeight || 0,
        paddingHorizontal: 16,
        paddingBottom: 24,
      }}
      onPress={handleClose}
      ref={modalRef}
    >
      {children}
    </Pressable>
  )
}