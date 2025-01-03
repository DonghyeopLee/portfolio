import styled from "styled-components";

export const Container = styled.section`
  margin: 8rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .content-wrapper {
    display: flex;
    gap: 4rem;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 3rem;
    
    .image {
      flex: 0 0 70%;
      width: 70%;
    }

    .description {
      flex: 0 0 30%;
      width: 30%;
      padding: 0 1rem;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 1rem;
      
      .image,
      .description {
        width: 100%;
        flex: 1;
      }
    }
  }

  .image {
    flex: 1;
    position: relative;
    width: 100%;
  }

  .image_slider {
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 600px;
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.4);
    position: relative;
  }
  
  .image_slider .images {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }
  }

  .description {
    flex: 0 0 30%;
    width: 30%;
    padding: 0 1rem;
    
    h1 {
      font-size: 2.4rem;
      margin-bottom: 1rem;
      color: #fff;
    }
    
    p {
      white-space: pre-line;
      line-height: 1.8;
      font-size: 1.4rem;
      color: #fff;
      
      /* Style for bullet points */
      ul {
        margin-left: 1.5rem;
        margin-top: 0.5rem;
        color: #fff;
      }
      
      /* Add some spacing between sections */
      & > *:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  }

  /* Thumbnail styles */
  .thumbnails {
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    gap: 5px;
    
    img {
      height: 60px;
      width: auto;
      cursor: pointer;
      border: 2px solid transparent;
      object-fit: cover;
      
      &:hover {
        border-color: #fff;
      }
    }
  }

  /* Slide button styles */
  .slide-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }

    &.prev {
      left: 20px;
    }

    &.next {
      right: 20px;
    }
  }

  @media (max-width: 768px) {
    .image_slider {
      height: 500px;
    }

    .description {
      padding: 1rem 0;
    }
  }
`