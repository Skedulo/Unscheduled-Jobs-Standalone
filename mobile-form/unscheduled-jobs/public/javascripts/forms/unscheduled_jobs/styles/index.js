import styled from 'styled-components';
import * as common from './color_code';

const iconWrapper = {
  arrowIcon: require('../../../../stylesheets/images/chevron-right-gray.svg'),
  searchIcon: require('../../../../stylesheets/images/search.svg'),
  trashBlackIcon: require('../../../../stylesheets/images/icon-trash-black.svg'),
  plusWhiteIcon: require('../../../../stylesheets/images/icon-plus-white.svg'),
  crossWhiteIcon2: require('../../../../stylesheets/images/icon-cross-white-2.svg'),
  editIcon: require('../../../../stylesheets/images/edit.svg'),
};


export const Wrapper = styled.div`
    &.list-item {
      margin-top: 8px !important;
    }
    
    .list-item {
      color: ${common.colorText};
    }
  `;

export const Summary = styled.div`
    color: ${common.colorText};
    background-color: ${props => props.index % 2 === 0 ? common.colorLightGrey : common.colorWhite};
    padding: 5px;
    height: 75px;
  `;

export const Preview = styled.div`
    font-size: 12px;
    min-height: 35px;
    max-height: 35px;
    font-style: italic;
    overflow: hidden;
  `;

export const ListingItem = styled.div`
    overflow: hidden;
    padding: 16px 20px;
    background: ${common.colorWhite};
    margin-bottom: 16px;
  `;

export const ListingItemTitle = styled.h3`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-bottom: 16px;
    position: relative;
    &:after {
      content: '';
      width: calc(100% + 20px);
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: rgba(164, 173, 186, 0.2);
    }
    .listing-item__title-image-icon {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      margin-right: 11px;
      background-size: contain;
    }
    .listing-item__title-wrapper {
      flex: 1;
      overflow: hidden;
    }
    .listing-item__date-wrapper {
      flex: none;
      white-space: nowrap;
    }
    .listing-item__title {
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: -0.3px;
      color: ${common.colorText};
      letter-spacing: -0.3px;
      color: #002748;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: calc(100% - 40px);
    }
    .listing-item__date {
      font-size: 12px;
      font-weight: normal;
      line-height: 1.33;
      color: #a4adba;
      display: inline-block;
      vertical-align: middle;
    }
    .listing-item__arrow {
      width: 5px;
      height: 10px;
      background: url(${iconWrapper.arrowIcon}) no-repeat center;
      background-size: contain;
      display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
    }
  `;

export const ListingItemBody = styled.div`
    font-size: 14px;
    font-weight: normal;
    line-height: 1.57;
    color: ${common.colorGrey};
    margin-top: 14px;
  `;


export const SearchWrapper = styled.div`
    position: relative;
    padding: 0 20px;
    margin-bottom: 16px;
    margin-top: 16px;
  `;

export const SearchBox = styled.input`
    border: none !important;
    border-radius: 4px !important;
    background: none !important;
    background-color: #ebedf0 !important;
    width: 100% !important;
    height: 48px !important;
    padding: 20px !important;
    box-shadow: none !important;
    font-size: 13.3333px !important;
    &:focus,
    &:valid {
      &+.search-box-placeholder {
        display: none !important;
      }
    }
  `;

export const SearchBoxPlaceholder = styled.div`
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 13px;
    color: ${common.colorGrey};
    &:before {
      content: '';
      position: absolute;
      top: calc(50% + 3px);
      left: -29px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 19px;
      height: 19px;
      background: url(${iconWrapper.searchIcon}) no-repeat top center;
    }
  `;

export const TextWrapper = styled.div`
    line-height: 45px;
    height: 45px;
    color: ${common.colorWhite}
  `;

export const MedicalHeaderText = styled.div`
    height: 30px;
    font-size: 14px;
    background-color: ${props => props.background || '#FAFAFA'};
    border-bottom: 1px solid #ddd;
  `;

export const StickyListActions = styled.div`
  position: fixed;
  z-index: 2;
  width: 64px;
  height: 64px;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  .sticky-list-actions__btn {
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition-property: opacity, transform;
    transition-duration: 0.3s;
    &--trash {
      opacity: 0;
      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        display: block;
        width: 20px;
        height: 22px;
        background: url(${iconWrapper.trashBlackIcon});
        background-size: 100% 100%;
      }
    }
    &--add,
    &--add-remove {
      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background: url(${iconWrapper.plusWhiteIcon});
        background-size: 100% 100%;
        transition: transform 0.3s;
      }
    }
    &--add-remove {
      &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background: url(${iconWrapper.crossWhiteIcon2});
        background-size: 100% 100%;
        transition: transform 0.3s;
      }
    }
    &--edit {
      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        content: '';
        display: block;
        width: 64px;
        height: 64px;
        background: url(${iconWrapper.editIcon});
        background-size: 100% 100%;
        transition: transform 0.3s;
      }
    }
  }
  &--expanded &__btn:first-child {
    transform: translateX(calc(-50% - 8px));
    opacity: 1;
  }
  &--expanded &__btn:last-child {
    transform: translateX(calc(50% + 8px));
  }
  &--expanded &__btn--add-remove {
    &:before {
      transform: translate(-50%, -50%) scale(0);
    }
    &:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const SearchItem = styled.div`
  line-height: 23px;
`;
