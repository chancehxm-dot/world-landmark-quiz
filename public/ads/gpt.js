(function () {
  var DISPLAY_ADS = [
    {
      path: '/23350225729/ca-pub-3284064188904906-tag/lv_techsilver.shop_336x280_10',
      sizes: [[300, 250], [336, 280]],
      divId: 'div-gpt-ad-1779350318706-0',
    },
    {
      path: '/23350225729/ca-pub-3284064188904906-tag/lv_game.techsilver.shop_336x280_10',
      sizes: [[300, 250], [336, 280]],
      divId: 'div-gpt-ad-1779350405067-0',
    },
  ];

  var OUT_OF_PAGE_ADS = [
    {
      path: '/23350225729/ca-pub-3284064188904906-tag/lv_techsilver.shop_anchor_10',
      format: 'BOTTOM_ANCHOR',
    },
    {
      path: '/23350225729/ca-pub-3284064188904906-tag/lv_techsilver.shop_int_10',
      format: 'INTERSTITIAL',
    },
    {
      path: '/23350225729/ca-pub-3284064188904906-tag/lv_game.techsilver.shop_anchor_10',
      format: 'BOTTOM_ANCHOR',
    },
    {
      path: '/23350225729/ca-pub-3284064188904906-tag/lv_game.techsilver.shop_int_10',
      format: 'INTERSTITIAL',
    },
  ];

  var i;

  window.googletag = window.googletag || { cmd: [] };

  googletag.cmd.push(function () {
    var oopSlots = [];
    var slot;
    var dispSlot;

    for (i = 0; i < OUT_OF_PAGE_ADS.length; i++) {
      var oop = OUT_OF_PAGE_ADS[i];
      slot = googletag.defineOutOfPageSlot(oop.path, googletag.enums.OutOfPageFormat[oop.format]);
      if (slot) {
        slot.addService(googletag.pubads());
        oopSlots.push({ slot: slot, format: oop.format });
      }
    }

    for (i = 0; i < DISPLAY_ADS.length; i++) {
      var disp = DISPLAY_ADS[i];
      if (document.getElementById(disp.divId)) {
        dispSlot = googletag.defineSlot(disp.path, disp.sizes, disp.divId);
        if (dispSlot) dispSlot.addService(googletag.pubads());
      }
    }

    googletag.setConfig({ singleRequest: true });
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();

    for (i = 0; i < DISPLAY_ADS.length; i++) {
      var divId = DISPLAY_ADS[i].divId;
      if (document.getElementById(divId)) {
        googletag.display(divId);
      }
    }

    for (i = 0; i < oopSlots.length; i++) {
      googletag.display(oopSlots[i].slot);
    }
  });
})();
