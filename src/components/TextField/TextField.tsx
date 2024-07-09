import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import styles from './TextField.module.scss'

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange'
> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = (props: Props) => {
  const { onChange, ...p } = props
  return <input className={styles.input} type="text" onChange={onChange} {...p} />
}

export default TextInput
