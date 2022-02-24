/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

export default {

  // Attach Drupal Behavior.
  attach (context, settings) {
    // console.log("Attached.");
    (function ($) {
      $('.su-lockup__wordmark').parents('.su-lockup__cell1').addClass('empty-logo');
      // $('.su-lockup__wordmark').remove();
    })(jQuery);
  },

  // Detach Example.
  detach () {
    // console.log("Detached.");
  }
}
