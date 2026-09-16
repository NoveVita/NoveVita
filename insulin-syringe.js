/* insulin-syringe.js — insulin syringe visual built from the reference photo
   (assets/syringe-reference.png) for needle, hub, glass barrel, flange and
   plunger — all used exactly as photographed and never moved or resized.
   Only two elements are dynamic, drawn as simple absolutely-positioned
   layers on top of the barrel (no pixel-cropping/scaling of the photo,
   which was fragile and produced an inconsistent visual fill length):
     - a gold liquid-fill bar: width = (units / maxUnits) * barrel width
     - a stopper marker: positioned at the same fill-end percentage
   Both use the exact same percentage, so they always agree, and the fill
   length always differs correctly between syringe sizes (e.g. exactly half
   as long at 100 units-max vs 50 units-max for the same dose).
   Usage: window.renderInsulinSyringe(units, maxUnits, fmtNum) -> html string */
(function () {
  var IMG_W = 1536, IMG_H = 1024;
  var BARREL_X = 340, BARREL_R = 1365, BARREL_Y = 405, BARREL_H = 121;
  var barrelXPct = BARREL_X / IMG_W * 100;
  var barrelRPct = BARREL_R / IMG_W * 100;
  var barrelWPct = barrelRPct - barrelXPct;
  var barrelYPct = BARREL_Y / IMG_H * 100;
  var barrelHPct = BARREL_H / IMG_H * 100;
  // liquid bar is drawn thinner than the full tube height (per feedback the block was too big)
  var fillHPct = barrelHPct * 0.62;
  var fillYPct = barrelYPct + (barrelHPct - fillHPct) / 2;
  // band where the photo's own baked-in numbers (0,5,10...50, fixed for a 0.5ml/50u syringe) are printed
  var numbersYPct = 420 / IMG_H * 100;
  var numbersHPct = 62 / IMG_H * 100;

  function renderInsulinSyringe(units, maxUnits, fmtNum, opts) {
    fmtNum = fmtNum || function (n) { return String(Math.round(n)); };
    opts = opts || {};
    var pct = maxUnits > 0 ? Math.max(0, Math.min(units || 0, maxUnits)) / maxUnits : 0;
    var fillWidthPct = pct * barrelWPct;
    var fillEndPct = barrelXPct + fillWidthPct;

    // Hide the photo's own baked-in second ruler row printed just below the tube.
    var lowerRowMask = '<div class="syringe-green-mask" style="left:' + (barrelXPct - 2.5).toFixed(2) + '%; width:' + (barrelWPct + 6).toFixed(2) + '%; top:' + (barrelYPct + barrelHPct * 1.02).toFixed(2) + '%; height:' + (barrelHPct * 1.15).toFixed(2) + '%;"></div>';

    // Redraw plain (unlabeled) tick marks on the tube for the actual selected syringe size,
    // so the stopper always lands exactly on a real mark regardless of size chosen.
    var barrelTickDivs = '';
    var stepU = maxUnits > 50 ? 2 : 1;
    for (var u = 0; u <= maxUnits; u += stepU) {
      var isMajor = (u % 10) === 0;
      var isMid = !isMajor && (u % 5) === 0;
      var leftPct = (u / maxUnits) * 100;
      var hPct = isMajor ? 62 : (isMid ? 43 : 26);
      barrelTickDivs += '<div style="position:absolute; left:' + leftPct.toFixed(2) + '%; top:0; width:' + (isMajor ? 1.6 : 1) + 'px; height:' + hPct + '%; background:' + (isMajor ? 'rgba(31,61,51,0.7)' : 'rgba(31,61,51,0.38)') + ';"></div>';
    }
    var ticksLayer = '<div style="position:absolute; left:' + barrelXPct.toFixed(2) + '%; width:' + barrelWPct.toFixed(2) + '%; top:' + barrelYPct.toFixed(2) + '%; height:' + barrelHPct.toFixed(2) + '%; overflow:hidden;">' + barrelTickDivs + '</div>';

    // Mask the photo's own printed numbers (baked in for a fixed 0.5ml/50u syringe) so they
    // don't stay stuck at 0-50 when a different syringe size (e.g. 1ml/100u) is selected.
    var numbersMask = '<div class="syringe-green-mask" style="left:' + (barrelXPct - 2.5).toFixed(2) + '%; width:' + (barrelWPct + 6).toFixed(2) + '%; top:' + numbersYPct.toFixed(2) + '%; height:' + numbersHPct.toFixed(2) + '%;"></div>';

    // Redraw number labels that match the actually selected syringe size.
    var labelDivs = '';
    for (var lu = 0; lu <= maxUnits; lu += 10) {
      var lLeftPct = (lu / maxUnits) * 100;
      labelDivs += '<div style="position:absolute; left:' + lLeftPct.toFixed(2) + '%; top:0; transform:translateX(-50%); font-family:\'Inter\'; font-weight:700; font-size:12px; color:#EFE6D3; white-space:nowrap;">' + lu + '</div>';
    }
    // Optional half-way labels (5, 15, 25 ...) in gold, drawn in their own row UNDER the
    // barrel so they never collide with the white decade labels above it.
    var midLayer = '';
    if (opts.midLabels) {
      var midDivs = '';
      for (var mu = 5; mu <= maxUnits; mu += 10) {
        var mLeftPct = (mu / maxUnits) * 100;
        midDivs += '<div style="position:absolute; left:' + mLeftPct.toFixed(2) + '%; top:0; transform:translateX(-50%); font-family:\'Inter\'; font-weight:600; font-size:10px; color:#C8A96B; white-space:nowrap;">' + mu + '</div>';
      }
      midLayer = '<div style="position:absolute; left:' + barrelXPct.toFixed(2) + '%; width:' + barrelWPct.toFixed(2) + '%; top:' + (barrelYPct + barrelHPct * 1.18).toFixed(2) + '%; height:' + numbersHPct.toFixed(2) + '%;">' + midDivs + '</div>';
    }
    var labelsLayer = '<div style="position:absolute; left:' + barrelXPct.toFixed(2) + '%; width:' + barrelWPct.toFixed(2) + '%; top:' + numbersYPct.toFixed(2) + '%; height:' + numbersHPct.toFixed(2) + '%;">' + labelDivs + '</div>';

    var fillLayer = pct > 0 ? '<div style="position:absolute; left:' + barrelXPct.toFixed(2) + '%; top:' + fillYPct.toFixed(2) + '%; width:' + fillWidthPct.toFixed(2) + '%; height:' + fillHPct.toFixed(2) + '%; background:linear-gradient(to bottom, #F0CE6E, #E4B84A 50%, #D6A83C); border-radius:2px; transition:width 0.35s ease;"></div>' : '';
    var stopperLayer = '<div style="position:absolute; left:calc(' + fillEndPct.toFixed(2) + '% - 4px); top:' + (barrelYPct - 1.4).toFixed(2) + '%; width:8px; height:' + (barrelHPct + 2.8).toFixed(2) + '%; background:#141414; border-radius:2px; transition:left 0.35s ease;"></div>';

    return '<div class="syringe-scale-group">' +
      '<div class="syringe-photo-wrap">' +
      '<img src="assets/syringe-reference.png" alt="Insulinespuit" draggable="false">' +
      lowerRowMask + numbersMask + ticksLayer + labelsLayer + midLayer + fillLayer + stopperLayer +
      '</div>' +
      '</div>';
  }
  window.renderInsulinSyringe = renderInsulinSyringe;
})();
