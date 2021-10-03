import React from "react"

import IconsSocialMedia from "./icons"
import linksContent from "./content"

import * as S from "./styled"

const SocialMedia = () => {
  return (
    <S.SocialMediaWrapper>
      <S.SocialMediaList>
        {linksContent.map((linksContent, i) => {
          const Icon = IconsSocialMedia[linksContent.label]

          return (
            <S.SocialMediaItem key={i}>
              <S.SocialMediaLink href={linksContent.url}>
                <Icon alt={linksContent.label} />
              </S.SocialMediaLink>
            </S.SocialMediaItem>
          )
        })}
      </S.SocialMediaList>
    </S.SocialMediaWrapper>
  )
}

export default SocialMedia
