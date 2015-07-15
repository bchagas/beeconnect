var iShop = {
  setPageTransition: function(el) {
    options = {
      inClass               :   'fade-in-up-sm',
      outClass              :   'fade-out-up-sm',
      inDuration            :    800,
      outDuration           :    800,
      linkElement           :   '.animsition-link',
      loading               :    true,
      loadingParentElement  :   'body',
      loadingClass          :   'animsition-loading',
      unSupportCss          : [ 'animation-duration',
                                '-webkit-animation-duration',
                                '-o-animation-duration'
                              ],
      overlay               :   false,
      overlayClass          :   'animsition-overlay-slide',
      overlayParentElement  :   'body'
    };

    $(el).animsition(options);
  }
};
