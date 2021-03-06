import { useState, useEffect } from 'react'
import { INavBarItemProps } from '../components/NavBar/NavBarItem'

export const useNavBarItems = (): {
  items: INavBarItemProps['item'][]
  helloMessage: string
} => {
  const [items, setItems] = useState<INavBarItemProps['item'][]>([
    {}
  ] as INavBarItemProps['item'][])

  const [helloMessage, setHelloMessage] = useState<string>('')

  useEffect(() => {
    const activate = (clickedItem: INavBarItemProps) => {
      if (!clickedItem.item.active) {
        setItems(
          items.map(item =>
            item.name === clickedItem.item.name
              ? { ...item, active: true }
              : { ...item, active: false }
          )
        )
      }
    }

    const items: INavBarItemProps['item'][] = [
      { name: 'Listar Tarefas', href: '/', active: true, onClick: activate },
      { name: 'Nova Tarefa', href: '/form', active: false, onClick: activate }
    ]

    setItems(items)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { items, helloMessage }
}
