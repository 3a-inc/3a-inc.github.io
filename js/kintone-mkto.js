/**
 * Copyright (c) 2020 Three-A Inc.
 *
 * Licensed under the MIT License
 */
(function() {
    "use strict";
    // 保存後起動
    kintone.events.on('app.record.edit.submit.success', function(event) {
        alert("test");
        return event;
    });
})();
