import styled from 'styled-components';
import * as color from "./color_code";

export const Viewport = styled.div`
  padding-top: 5px;
`;

export const NoResult = styled.div`
  text-align: center;
  color: #cecece;
  font-size: 17.5px;
  padding: 10px 0;
  min-height: inherit;
  
  width: 60vw;
  margin: 0 auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

export const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(179, 179, 179, 0.3);
  z-index: 2;
`;

export const PopupPanel = styled.div`
  width: 80vw;
  margin: 0 auto;
  background: ${color.colorWhite};
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 30px #ccc;
`;

export const PopupButtons = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 16px;
  
  button {
    height: 50px;
    background: transparent;
    border-color: ${color.colorLightGrey};
    color: ${color.colorBlue};
    font-size: 16px;
  }
`;

export const PopupButton1 = styled.button`
  border-width: 1px 1px 0 0;
`;
export const PopupButton2 = styled.button`
  border-width: 1px 0 0 0;
  color: ${props => props.disabled ? color.colorGrey : color.colorBlue} !important;
`;

export const DropdownList = styled.select`
  height: 30px;
  border: 1px solid #ddd;
  background-size: 30px;
  margin: 0 10px 1px 0;
  
  option {
    display: none;
  }
`;

const arrowImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTAyQUMwREZGQTNFMzExOEVCRUNGN0UxQUQ5MTU3NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RTk4Q0U0N0E0MDQxMUUzQUEyQ0I3Rjc1NkYyNTBDMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RTk4Q0U0NkE0MDQxMUUzQUEyQ0I3Rjc1NkYyNTBDMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE4NkQ4NjZGMDBBNEUzMTFCMDg1REQ4RUJGREFEMTQyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM1MDJBQzBERkZBM0UzMTE4RUJFQ0Y3RTFBRDkxNTc0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IhuPqwAAAYFJREFUeNrs27tKw2AYBuBUvAMvJaCI4CCii5vg5uTkDTgIKlIHF+9A3MVZnAUHhwZcBHETFxEnUcED6hda8ECpqS2kkOeFt6Ft+rd5SHOirTUajY+kmVp+k6ZpIsUzhAAgQIAABSBAgAAFIECAAAUgQIAABSBAgAAFIECAAAUgQIAABSDAwctwGW+aZdlaTDb7POx2mqarlVgDY0HrMTlLmj/q7EfPy8Ar+ys8Gb3vwziP0fHKbQNjjXmIyVT0vYdh8p8nT7fGqt5OJBY8i8lKD0OsxxinVd8L70SP/vG64+iWw5hm5qI3Xcx/F51xHPiVfDs4Gn0tMO9bdCL6AvBnrqOLBeZbjl46E2mf/eheh+cPortO5TpnKXrR5vGr6IJz4WIZiz59u//c2ka6mFAw+RnKbOtAOe989NbFhO5yEt2IjkQPB/VDlg74x79D68mAx/VAgAABAhSAAAECFIAAAQIUgAABAhSAAAECFIAAAQIUgAABAhSAAAEClF/5FGAAhIs0CNSTJCwAAAAASUVORK5CYII=';
export const FakeDropdownList = styled.div`
  height: 30px !important;
  border: 1px solid #ddd;
  margin: 0 0 1px 0;
  background: url(${arrowImage}) no-repeat top right #fff !important;
  background-size: 30px !important;
  padding: 0px 46px 0px 8px !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  line-height: 28px;
`;

export const FakeInput = styled.input`
  height: 30px !important;
  border: 1px solid #ddd;
  margin: 0 0 1px 0;
`;

export const FakeCheckbox = styled.input`
  height: 30px !important;
  border: 1px solid #ddd;
  margin: 0 0 1px 0;
`;

export const Divide = styled.div`
  height: 8px;
  width: 100%;
  background: ${color.colorGrey4}
`;

export const OptionPanel = styled.div`
  position: absolute;
  bottom: 0;
  background: ${color.colorWhite}
  width: 100%;
`;

export const Options = styled.div`
  width: 100%;
  max-height: 153px;
  overflow-y: auto;
`;
