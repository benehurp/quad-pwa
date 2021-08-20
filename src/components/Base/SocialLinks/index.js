import React from "react"

import IconsSocialLinks from "./icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((links, i) => {
          const Icon = IconsSocialLinks[links.label]

          return (
            <S.SocialLinksItem key={i}>
              <Icon alt={links.label} />
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks
