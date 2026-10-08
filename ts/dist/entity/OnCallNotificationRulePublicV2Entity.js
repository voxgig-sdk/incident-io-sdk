"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRulePublicV2Entity = void 0;
const IncidentIoEntityBase_1 = require("../IncidentIoEntityBase");
class OnCallNotificationRulePublicV2Entity extends IncidentIoEntityBase_1.IncidentIoEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'on_call_notification_rule_public_v2';
        this.name_ = 'on_call_notification_rule_public_v2';
        this.Name = 'OnCallNotificationRulePublicV2';
    }
    make() {
        return new OnCallNotificationRulePublicV2Entity(this._client, this.entopts());
    }
    async list(reqmatch, ctrl) {
        const utility = this._utility;
        const { makeContext, done, 
        // The registry name is `makeError`; `error` is the local alias.
        makeError: error, featureHook, makePoint, makeRequest, makeResponse, makeResult, makeSpec, } = utility;
        let fres = undefined;
        let ctx = makeContext({
            opname: 'list',
            ctrl,
            match: this._match,
            data: this._data,
            reqmatch
        }, this._entctx);
        try {
            fres = featureHook(ctx, 'PrePoint');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.point = makePoint(ctx);
            if (ctx.out.point instanceof Error) {
                return error(ctx, ctx.out.point);
            }
            fres = featureHook(ctx, 'PreSpec');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.spec = makeSpec(ctx);
            if (ctx.out.spec instanceof Error) {
                return error(ctx, ctx.out.spec);
            }
            fres = featureHook(ctx, 'PreRequest');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.request = await makeRequest(ctx);
            if (ctx.out.request instanceof Error) {
                return error(ctx, ctx.out.request);
            }
            fres = featureHook(ctx, 'PreResponse');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.response = await makeResponse(ctx);
            if (ctx.out.response instanceof Error) {
                return error(ctx, ctx.out.response);
            }
            fres = featureHook(ctx, 'PreResult');
            if (fres instanceof Promise) {
                await fres;
            }
            ctx.out.result = await makeResult(ctx);
            if (ctx.out.result instanceof Error) {
                return error(ctx, ctx.out.result);
            }
            fres = featureHook(ctx, 'PreDone');
            if (fres instanceof Promise) {
                await fres;
            }
            if (null != ctx.result) {
                if (null != ctx.result.resmatch) {
                    this._match = ctx.result.resmatch;
                }
            }
            return done(ctx);
        }
        catch (err) {
            // What a hook throws here must not escape the cleaning below.
            try {
                fres = featureHook(ctx, 'PreUnexpected');
                if (fres instanceof Promise) {
                    await fres;
                }
            }
            catch (hookerr) {
                err = hookerr;
            }
            err = this._unexpected(ctx, err);
            if (err) {
                throw err;
            }
            else {
                // Off-happy-path (throw disabled): typed as any so the method's
                // Promise<OnCallNotificationRulePublicV2Entity[]> return stays clean under strict null checks.
                return undefined;
            }
        }
    }
}
exports.OnCallNotificationRulePublicV2Entity = OnCallNotificationRulePublicV2Entity;
//# sourceMappingURL=OnCallNotificationRulePublicV2Entity.js.map