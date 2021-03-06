<?php

/*
 * This file is part of fof/user-bio.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Instkffff\UserBioEve;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/UserBio.less'),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\AddUserBioAttribute::class);
    },
];
