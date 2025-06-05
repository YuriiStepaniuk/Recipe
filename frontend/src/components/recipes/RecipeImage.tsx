interface RecipeImageProps {
  src: string;
  alt: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} className="rounded shadow-md w-full" />
  </div>
);

export default RecipeImage;
