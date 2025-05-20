import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

//import BannerImg from '../../assets/images/header-categoria.png'
import { BannerContainer, BannerImage, Infos, TitleRestaurant } from './styles'

const CategoryBanner = () => {
  const location = useLocation()
  const [productInfo, setProductInfo] = useState<{
    title: string
    infos: string[]
    image: string
  } | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const title = searchParams.get('title')
    const infosString = searchParams.get('infos')
    const image = searchParams.get('image')

    if (title && infosString && image) {
      try {
        const infos = JSON.parse(decodeURIComponent(infosString))
        setProductInfo({ title, infos, image })
      } catch (error) {
        console.error("Erro ao analisar 'infos' da URL:", error)
      }
    } else {
      setProductInfo(null)
    }
  }, [location.search])

  return (
    <BannerContainer>
      {productInfo ? (
        <BannerImage
          style={{
            backgroundImage: `url(${decodeURIComponent(productInfo.image)})`
            // backgroundImage: `url(${BannerImg})`
          }}
        >
          <Infos>{productInfo.infos.join(', ')}</Infos>
          <TitleRestaurant>
            {decodeURIComponent(productInfo.title)}
          </TitleRestaurant>
        </BannerImage>
      ) : (
        <TitleRestaurant>Produto não encontrado</TitleRestaurant>
      )}
    </BannerContainer>
  )
}

export default CategoryBanner
