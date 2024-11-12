
import type { SVGProps } from "react";

interface Props {
  size?: number;
  SVGProps?: SVGProps<SVGSVGElement>;
};

export const HomeIcon = ({ size, ...props }: Props) => {
  size = size ?? 40;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_74_564)">
<path d="M21.8135 13.6476C22.0363 13.6476 22.25 13.7361 22.4075 13.8936C22.565 14.0512 22.6535 14.2648 22.6535 14.4876V21.5364C22.6859 22.5108 22.5683 23.1504 22.1327 23.5524C21.7271 23.9256 21.1391 24.0324 20.3771 23.9916H3.77274C2.99994 23.9532 2.39994 23.64 2.12154 23.0076C1.93674 22.5912 1.85034 22.0992 1.85034 21.534V14.4864C1.85034 14.2636 1.93884 14.05 2.09637 13.8924C2.25391 13.7349 2.46756 13.6464 2.69034 13.6464C2.91313 13.6464 3.12678 13.7349 3.28431 13.8924C3.44184 14.05 3.53034 14.2636 3.53034 14.4864V21.534C3.53194 21.8132 3.55994 22.038 3.61434 22.2084L3.65754 22.326L3.65394 22.314C3.65514 22.2984 3.68994 22.3044 3.81234 22.3116H20.4203C20.7143 22.3284 20.9015 22.3116 20.9675 22.3104L20.9723 22.3092C20.9567 22.2456 20.9867 21.9852 20.9723 21.5628V14.4864C20.9723 14.376 20.9941 14.2667 21.0364 14.1647C21.0787 14.0627 21.1407 13.97 21.2188 13.892C21.2969 13.814 21.3897 13.7521 21.4917 13.71C21.5938 13.6679 21.7031 13.6462 21.8135 13.6464M12.5207 0C12.8375 0 13.1207 0.1248 13.3871 0.3564L23.7371 10.1232C23.8188 10.1986 23.8846 10.2895 23.9309 10.3905C23.9771 10.4916 24.0029 10.6008 24.0066 10.7119C24.0103 10.823 23.992 10.9337 23.9526 11.0376C23.9133 11.1416 23.8537 11.2366 23.7773 11.3174C23.7009 11.3981 23.6093 11.4629 23.5077 11.508C23.4061 11.553 23.2966 11.5775 23.1855 11.5799C23.0744 11.5824 22.9639 11.5627 22.8604 11.5222C22.757 11.4816 22.6626 11.4209 22.5827 11.3436L12.4823 1.8108L1.38954 11.3688C1.22087 11.5144 1.00126 11.587 0.779026 11.5707C0.556796 11.5544 0.350149 11.4505 0.204545 11.2818C0.0589409 11.1131 -0.0136924 10.8935 0.00262324 10.6713C0.0189389 10.4491 0.122867 10.2424 0.291545 10.0968L11.6267 0.3324L11.7299 0.2556C11.9867 0.0948 12.2435 0.0012 12.5219 0.0012" fill="white"/>
</g>
<defs>
<clipPath id="clip0_74_564">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}
