
import { inspect } from 'node:util'

import { IncidentIoEntityBase } from '../IncidentIoEntityBase'

import type {
  IncidentIoSDK,
} from '../IncidentIoSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  StatusPagesV2,
  StatusPagesV2RemoveMatch,
} from '../IncidentIoTypes'

class StatusPagesV2Entity extends IncidentIoEntityBase<StatusPagesV2> {

  constructor(client: IncidentIoSDK, entopts: any) {
    super(client, entopts)
    this.name = 'status_pages_v2'
    this.name_ = 'status_pages_v2'
    this.Name = 'StatusPagesV2'
  }


  make(this: StatusPagesV2Entity) {
    return new StatusPagesV2Entity(this._client, this.entopts())
  }








  async remove(
    this: any, reqmatch?: StatusPagesV2RemoveMatch, ctrl?: Control,
  ): Promise<StatusPagesV2Entity> {

    const utility = this._utility

    const {
      makeContext,
      done,
      // The registry name is `makeError`; `error` is the local alias.
      makeError: error,
      featureHook,
      makePoint,
      makeRequest,
      makeResponse,
      makeResult,
      makeSpec,
    } = utility

    let fres: Promise<any> | undefined = undefined

    let ctx: Context = makeContext({
      opname: 'remove',
      ctrl,
      match: this._match,
      data: this._data,
      reqmatch
    }, this._entctx)

    try {


      fres = featureHook(ctx, 'PrePoint')
      if (fres instanceof Promise) { await fres }

      ctx.out.point = makePoint(ctx)
      if (ctx.out.point instanceof Error) {
        return error(ctx, ctx.out.point)
      }



      fres = featureHook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = makeSpec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featureHook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await makeRequest(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featureHook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await makeResponse(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featureHook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await makeResult(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featureHook(ctx, 'PreDone')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this._match = ctx.result.resmatch
        }

        if (null != ctx.result.resdata) {
          this._data = ctx.result.resdata
        }
      }

      const out = done(ctx)

      if (ctx.result && ctx.result.ok) {
        this.markDeleted()
        return this
      }

      return out
    }
    catch (err: any) {
      // What a hook throws here must not escape the cleaning below.
      try {

        fres = featureHook(ctx, 'PreUnexpected')
        if (fres instanceof Promise) { await fres }
      }
      catch (hookerr: any) {
        err = hookerr
      }

      err = this._unexpected(ctx, err)

      if (err) {
        throw err
      }
      else {
        // Off-happy-path (throw disabled): typed as any so the method's
        // Promise<StatusPagesV2Entity> return stays clean under strict null checks.
        return undefined as any
      }
    }
  }


}


export {
  StatusPagesV2Entity
}
