/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import {
  IonApp,
  IonContent,
  IonFooter,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/react"
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"
import "@ionic/react/css/display.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/float-elements.css"
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/typography.css"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/* Theme variables */
import "../theme/variables.css"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <IonApp>
      <IonPage>
        <Header siteTitle={data.site.siteMetadata.title} />
        <IonContent className="ion-padding">
          <main>{children}</main>
        </IonContent>
        <IonFooter className="ion-padding-start">
          <IonToolbar>
            <IonLabel>© {new Date().getFullYear()}, PreConception</IonLabel>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </IonApp>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
