import React, { Component } from 'react'

// css
import '../css/description.css'

export class Description extends Component {
  render() {
    return (
      <div>
        <div className='description__container'>
          <img src="https://s3-alpha-sig.figma.com/img/5d36/bc1d/c62d688efa6a27fd24144c2bbf0a6f85?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oHe2ZlQfC98PWzfUd5dKYQwAluxV5HJR4185hjHoAmoFcRQzv67d6AnJ3GFhebZ9uCykEnGugVKC5MRFIvWF7b3H4RnjtuiaQUOcM710Wis4bZflC6V6KQkwCjtjJeYjH~lAsSPDpfeUYRQ5lvzvYCl3FZwOr0S9-i9kKxKtAhdC-h9ETrJVMTBIXomF7U7N6LdDbPneHgZeshq2-o-8gYSYw5SVWV~ngwkeyInAk7ogm5DQ57od3q9BuolOL3k8ghMWaXOKlNG-GafKSlsem0pCpve373RFtXuVZHBJ2AjpTxEqgIk8MD51hf-U9tveSC0XnsM6Ld6zalACfSlZhg__" alt="Gitrl-with-a-cup-of-coffee" />
          <div className='description__content'>
            <h1>About our beans</h1>
            <div className='description__beanLogo'>
              <div style={{ border: "1px solid black", width: "60px", height: "0px" }}></div>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.38845 26.5504C4.03449 24.1621 4.95554 20.4168 7.75693 17.6151C10.9384 14.4341 15.337 13.6759 17.5827 15.9214C17.5851 15.9242 17.5879 15.9274 17.5913 15.9304C17.1418 17.2383 15.7102 20.0203 11.42 21.5245C7.48942 22.9031 5.97353 25.0955 5.38845 26.5504ZM16.2605 19.5906C15.2344 20.6175 13.776 21.6253 11.7102 22.3503C7.51766 23.8203 6.34633 26.2275 6.01945 27.3931C6.03527 27.4089 6.04806 27.4255 6.06292 27.4401C8.30844 29.6857 12.7076 28.9273 15.8882 25.7464C18.7188 22.9159 19.6292 19.1225 18.2142 16.7383C17.8736 17.5324 17.2813 18.5697 16.2605 19.5906ZM7.58465 9.2452C12.1138 9.6421 14.564 7.69641 15.512 6.69018C15.5103 6.68618 15.5092 6.68167 15.5079 6.67805C14.387 3.70713 10.0663 2.58599 5.85745 4.17405C2.15076 5.57274 -0.231913 8.60592 0.0179255 11.3398C1.15059 10.2555 3.43514 8.88223 7.58465 9.2452ZM9.9169 14.9334C13.6625 13.5205 16.0541 10.4387 15.7471 7.6831C15.1096 8.26655 14.1423 8.96808 12.7918 9.47781C11.434 9.99005 9.68968 10.3081 7.50894 10.1171C3.08342 9.72905 1.02379 11.4401 0.245287 12.3682C0.253198 12.3888 0.258743 12.4091 0.265916 12.4285C1.38705 15.4002 5.70787 16.5218 9.9169 14.9334ZM23.0248 8.73791C25.7422 5.09207 25.3735 1.9848 25.0151 0.649692C25.0109 0.649248 25.0069 0.647695 25.003 0.646808C21.8859 0.0399204 18.6621 3.12782 17.8023 7.54313C17.0451 11.4328 18.3749 15.0528 20.8322 16.2767C20.5046 14.7432 20.5365 12.0782 23.0248 8.73791ZM25.9836 0.971325C26.1454 1.82058 26.2341 3.0121 25.9582 4.42862C25.6811 5.85356 25.0348 7.50468 23.7271 9.26028C21.0722 12.8223 21.4461 15.4731 21.8269 16.623C21.8487 16.6275 21.869 16.6331 21.8891 16.6375C25.0065 17.2444 28.2299 14.157 29.0896 9.74125C29.8552 5.81186 28.4892 2.15715 25.9836 0.971325Z" fill="black" />
              </svg>
              <div style={{ border: "1px solid black", width: "60px", height: "0px" }}></div>
            </div>
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend objection do intention<br />so questions.
              <br />
              As greatly removed calling pleased improve an.
              <br />
              Last ask him cold feel
              <br />
              met spot shy want. Children me laughing we<br /> prospect answered followed. At it went<br />
              is song that held help face.
            </p>
          </div>
        </div>
        <div className='description__stickConteiner'>
          <div className='description__stick'></div>
        </div>
      </div>
    )
  }
}

