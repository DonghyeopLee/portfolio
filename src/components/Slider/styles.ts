import styled from "styled-components";

export const Container = styled.section`
.Head2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  .image {
    position: relative;
    width: 100%;

  }
  .image_slider {
    border-radius: 5px;
    overflow: hidden;
    width: 800px;
    height: 500px;
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.4);
    text-align:center; 
  }
  
  .image_slider .images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .image_slider .images img {
    position: block;
    width: 70%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }
  
  .button_prev,
  .button_next {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    transition: all 0.3s ease-in-out;
  }
  
  .button_next {
    right: 0;
  }
  
  .button_next:hover,
  .button_prev:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .image_slider .thumbnails {
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  
  .image_slider .thumbnails img {
    width:100;
    cursor: 120px pointer;
    border: 2px solid transparent;
    object-fit: cover;
  }
@media only screen and (max-width: 960px) {

    .image_slider {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: center;
      max-width: 100%;
      img{
        margin-top: 2rem;
        float: right;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }
`