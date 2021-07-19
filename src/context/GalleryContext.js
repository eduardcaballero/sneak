import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import { getImagesUnsplash } from "../services/gallery";
import { API_IMAGE, links, screen } from "../constants";

const GalleryContext = createContext({})

const GalleryProvider = ({ children }) => {
    const [imagesGallery, setImagesGallery] = useState({
        all: [],
        branding: [],
        web: [],
        photography: [],
        app: []
    })
    const [loading, setLoading] = useState(true)
    const [stateGallery, setStateGallery] = useState({
        active: links.ALL,
        all: 1,
        branding: 1,
        web: 1,
        photography: 1,
        app: 1
    })

    const searchCategories = useCallback(async (category, cancelTokenSource) => {
        let intViewportWidth = window.innerWidth;
        setLoading(true)
        let response = await getImagesUnsplash(stateGallery[category], category, cancelTokenSource)
        const newImages = response.results.map(image => ({ width: image.width, height: image.height, src: intViewportWidth > screen.DESKTOP ? image.urls.regular : image.urls.small, title: image.alt_description }))
        const imagesTemp = imagesGallery[category].concat(newImages)
        setImagesGallery(s => ({ ...s, [category]: imagesTemp}))
        setLoading(false)

    }, [stateGallery, imagesGallery])

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        if(imagesGallery[stateGallery.active].length === 0 || imagesGallery[stateGallery.active].length < stateGallery[stateGallery.active]*API_IMAGE) {
            searchCategories(stateGallery.active, cancelTokenSource)
        }

        return () => { cancelTokenSource.cancel() }
    }, [stateGallery, imagesGallery,searchCategories])

    const handleActive = (payload) => {
        setStateGallery(s => ({ ...s, active: payload }))

    }
    const addMoreImage = () => {
        setStateGallery(s => ({ ...s, [stateGallery.active]: s[stateGallery.active] + 1 }))

    }

    return <GalleryContext.Provider value={{ imagesGallery, stateGallery, loading, handleActive, addMoreImage }}>{children}</GalleryContext.Provider>
}

const useGalleryContext = () => useContext(GalleryContext)

export default GalleryContext
export { GalleryProvider, useGalleryContext }