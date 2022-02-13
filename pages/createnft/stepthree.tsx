import React from 'react'
import Layout from '../../components/shared/Layout'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const StepThree = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    router.push('/createnft/stepfour')
    // alert(JSON.stringify(data))
  })

  console.log(errors)

  return (
    <Layout className="bg-glow">
      <main className="mt-24">
        <div className="w-full bg-[#1D1E27] bg-opacity-50 p-16 flex flex-col ">
          <h1 className="mx-auto text-4xl font-bold">
            Create your new audio NFT
          </h1>
          <section className="w-full mt-12">
            <h2>Step 3: Add a name and description for your NFT</h2>
            <form onSubmit={onSubmit} className="flex flex-col mt-7">
              <label htmlFor="itemName" className="text-white opacity-70">
                Item Name
              </label>
              <input
                type="text"
                className="bg-[#1D1E27] bg-opacity-40  mt-3"
                {...register('itemName', { required: true })}
              />
              {errors.itemName?.type === 'required' && (
                <div className="text-sm text-red-900">
                  Item name is required
                </div>
              )}

              <label
                htmlFor="description"
                className="mt-8 text-white opacity-70"
              >
                Description
              </label>
              <textarea
                className="bg-[#1D1E27] bg-opacity-40  mt-3"
                {...register('description', { required: true })}
              />

              {errors.description?.type === 'required' && (
                <div className="text-sm text-red-900">
                  Description is required
                </div>
              )}

              <input
                className="mx-auto mt-14 cursor-pointer font-semibold text-2xl h-[52px] w-[183px] rounded-xl bg-gradient-to-r from-[#5773D7] via-[#9757D7] to-[#D75775]"
                type="submit"
                value="Continue"
              />
            </form>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default StepThree
