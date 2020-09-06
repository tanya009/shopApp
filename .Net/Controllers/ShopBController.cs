using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ShopBController : ApiController
    {
        private ShopEntities db = new ShopEntities();

        // GET: api/ShopB
        public IQueryable<ShopB> GetShopBs()
        {
            return db.ShopBs;
        }

        

        // PUT: api/ShopB/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutShopB(string id, ShopB shopB)
        {
            
            if (id != shopB.Name)
            {
                return BadRequest();
            }

            db.Entry(shopB).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShopBExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ShopB
        [ResponseType(typeof(ShopB))]
        public IHttpActionResult PostShopB(ShopB shopB)
        {
            

            db.ShopBs.Add(shopB);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ShopBExists(shopB.Name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = shopB.Name }, shopB);
        }

        // DELETE: api/ShopB/5
        [ResponseType(typeof(ShopB))]
        public IHttpActionResult DeleteShopB(string id)
        {
            ShopB shopB = db.ShopBs.Find(id);
            if (shopB == null)
            {
                return NotFound();
            }

            db.ShopBs.Remove(shopB);
            db.SaveChanges();

            return Ok(shopB);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ShopBExists(string id)
        {
            return db.ShopBs.Count(e => e.Name == id) > 0;
        }
    }
}